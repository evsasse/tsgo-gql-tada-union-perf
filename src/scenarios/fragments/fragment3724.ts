import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3722 } from "./fragment3722";
import type { FragmentToken3723 } from "./fragment3723";

export const FRAGMENT_3724 = gql(`
  fragment Fragment3724 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult3724 = ResultOf<typeof FRAGMENT_3724>;
type FragmentSelf3724 = NonNullable<FragmentResult3724>;

export type FragmentToken3724 =
  | FragmentSelf3724["__typename"]
  | FragmentSelf3724["typenameHint"] | FragmentToken3722 | FragmentToken3723;
