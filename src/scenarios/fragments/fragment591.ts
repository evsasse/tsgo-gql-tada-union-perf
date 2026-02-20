import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken589 } from "./fragment589";
import type { FragmentToken590 } from "./fragment590";

export const FRAGMENT_591 = gql(`
  fragment Fragment591 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult591 = ResultOf<typeof FRAGMENT_591>;
type FragmentSelf591 = NonNullable<FragmentResult591>;

export type FragmentToken591 =
  | FragmentSelf591["__typename"]
  | FragmentSelf591["typenameHint"] | FragmentToken589 | FragmentToken590;
