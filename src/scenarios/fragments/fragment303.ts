import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken301 } from "./fragment301";
import type { FragmentToken302 } from "./fragment302";

export const FRAGMENT_303 = gql(`
  fragment Fragment303 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult303 = ResultOf<typeof FRAGMENT_303>;
type FragmentSelf303 = NonNullable<FragmentResult303>;

export type FragmentToken303 =
  | FragmentSelf303["__typename"]
  | FragmentSelf303["typenameHint"] | FragmentToken301 | FragmentToken302;
