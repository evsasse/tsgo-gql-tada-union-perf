import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1506 } from "./fragment1506";
import type { FragmentToken1507 } from "./fragment1507";

export const FRAGMENT_1508 = gql(`
  fragment Fragment1508 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult1508 = ResultOf<typeof FRAGMENT_1508>;
type FragmentSelf1508 = NonNullable<FragmentResult1508>;

export type FragmentToken1508 =
  | FragmentSelf1508["__typename"]
  | FragmentSelf1508["typenameHint"] | FragmentToken1506 | FragmentToken1507;
