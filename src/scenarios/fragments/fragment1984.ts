import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1982 } from "./fragment1982";
import type { FragmentToken1983 } from "./fragment1983";

export const FRAGMENT_1984 = gql(`
  fragment Fragment1984 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult1984 = ResultOf<typeof FRAGMENT_1984>;
type FragmentSelf1984 = NonNullable<FragmentResult1984>;

export type FragmentToken1984 =
  | FragmentSelf1984["__typename"]
  | FragmentSelf1984["typenameHint"] | FragmentToken1982 | FragmentToken1983;
