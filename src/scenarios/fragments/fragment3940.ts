import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3938 } from "./fragment3938";
import type { FragmentToken3939 } from "./fragment3939";

export const FRAGMENT_3940 = gql(`
  fragment Fragment3940 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult3940 = ResultOf<typeof FRAGMENT_3940>;
type FragmentSelf3940 = NonNullable<FragmentResult3940>;

export type FragmentToken3940 =
  | FragmentSelf3940["__typename"]
  | FragmentSelf3940["typenameHint"] | FragmentToken3938 | FragmentToken3939;
