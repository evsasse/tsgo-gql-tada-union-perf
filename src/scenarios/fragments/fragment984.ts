import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken982 } from "./fragment982";
import type { FragmentToken983 } from "./fragment983";

export const FRAGMENT_984 = gql(`
  fragment Fragment984 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult984 = ResultOf<typeof FRAGMENT_984>;
type FragmentSelf984 = NonNullable<FragmentResult984>;

export type FragmentToken984 =
  | FragmentSelf984["__typename"]
  | FragmentSelf984["typenameHint"] | FragmentToken982 | FragmentToken983;
