import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3720 } from "./fragment3720";
import type { FragmentToken3721 } from "./fragment3721";

export const FRAGMENT_3722 = gql(`
  fragment Fragment3722 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult3722 = ResultOf<typeof FRAGMENT_3722>;
type FragmentSelf3722 = NonNullable<FragmentResult3722>;

export type FragmentToken3722 =
  | FragmentSelf3722["__typename"]
  | FragmentSelf3722["typenameHint"] | FragmentToken3720 | FragmentToken3721;
