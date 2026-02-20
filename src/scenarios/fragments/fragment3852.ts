import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3850 } from "./fragment3850";
import type { FragmentToken3851 } from "./fragment3851";

export const FRAGMENT_3852 = gql(`
  fragment Fragment3852 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult3852 = ResultOf<typeof FRAGMENT_3852>;
type FragmentSelf3852 = NonNullable<FragmentResult3852>;

export type FragmentToken3852 =
  | FragmentSelf3852["__typename"]
  | FragmentSelf3852["typenameHint"] | FragmentToken3850 | FragmentToken3851;
