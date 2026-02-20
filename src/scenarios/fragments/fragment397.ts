import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken395 } from "./fragment395";
import type { FragmentToken396 } from "./fragment396";

export const FRAGMENT_397 = gql(`
  fragment Fragment397 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult397 = ResultOf<typeof FRAGMENT_397>;
type FragmentSelf397 = NonNullable<FragmentResult397>;

export type FragmentToken397 =
  | FragmentSelf397["__typename"]
  | FragmentSelf397["typenameHint"] | FragmentToken395 | FragmentToken396;
