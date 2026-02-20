import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken632 } from "./fragment632";
import type { FragmentToken633 } from "./fragment633";

export const FRAGMENT_634 = gql(`
  fragment Fragment634 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult634 = ResultOf<typeof FRAGMENT_634>;
type FragmentSelf634 = NonNullable<FragmentResult634>;

export type FragmentToken634 =
  | FragmentSelf634["__typename"]
  | FragmentSelf634["typenameHint"] | FragmentToken632 | FragmentToken633;
