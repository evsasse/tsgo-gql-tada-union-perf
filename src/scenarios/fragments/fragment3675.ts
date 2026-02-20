import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3673 } from "./fragment3673";
import type { FragmentToken3674 } from "./fragment3674";

export const FRAGMENT_3675 = gql(`
  fragment Fragment3675 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult3675 = ResultOf<typeof FRAGMENT_3675>;
type FragmentSelf3675 = NonNullable<FragmentResult3675>;

export type FragmentToken3675 =
  | FragmentSelf3675["__typename"]
  | FragmentSelf3675["typenameHint"] | FragmentToken3673 | FragmentToken3674;
