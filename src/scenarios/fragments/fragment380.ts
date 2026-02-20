import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken378 } from "./fragment378";
import type { FragmentToken379 } from "./fragment379";

export const FRAGMENT_380 = gql(`
  fragment Fragment380 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult380 = ResultOf<typeof FRAGMENT_380>;
type FragmentSelf380 = NonNullable<FragmentResult380>;

export type FragmentToken380 =
  | FragmentSelf380["__typename"]
  | FragmentSelf380["typenameHint"] | FragmentToken378 | FragmentToken379;
