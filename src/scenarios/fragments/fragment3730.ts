import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3728 } from "./fragment3728";
import type { FragmentToken3729 } from "./fragment3729";

export const FRAGMENT_3730 = gql(`
  fragment Fragment3730 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult3730 = ResultOf<typeof FRAGMENT_3730>;
type FragmentSelf3730 = NonNullable<FragmentResult3730>;

export type FragmentToken3730 =
  | FragmentSelf3730["__typename"]
  | FragmentSelf3730["typenameHint"] | FragmentToken3728 | FragmentToken3729;
