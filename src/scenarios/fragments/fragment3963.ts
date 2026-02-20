import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3961 } from "./fragment3961";
import type { FragmentToken3962 } from "./fragment3962";

export const FRAGMENT_3963 = gql(`
  fragment Fragment3963 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult3963 = ResultOf<typeof FRAGMENT_3963>;
type FragmentSelf3963 = NonNullable<FragmentResult3963>;

export type FragmentToken3963 =
  | FragmentSelf3963["__typename"]
  | FragmentSelf3963["typenameHint"] | FragmentToken3961 | FragmentToken3962;
