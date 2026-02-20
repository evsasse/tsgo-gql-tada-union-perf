import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1584 } from "./fragment1584";
import type { FragmentToken1585 } from "./fragment1585";

export const FRAGMENT_1586 = gql(`
  fragment Fragment1586 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult1586 = ResultOf<typeof FRAGMENT_1586>;
type FragmentSelf1586 = NonNullable<FragmentResult1586>;

export type FragmentToken1586 =
  | FragmentSelf1586["__typename"]
  | FragmentSelf1586["typenameHint"] | FragmentToken1584 | FragmentToken1585;
