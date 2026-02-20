import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken873 } from "./fragment873";
import type { FragmentToken874 } from "./fragment874";

export const FRAGMENT_875 = gql(`
  fragment Fragment875 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult875 = ResultOf<typeof FRAGMENT_875>;
type FragmentSelf875 = NonNullable<FragmentResult875>;

export type FragmentToken875 =
  | FragmentSelf875["__typename"]
  | FragmentSelf875["typenameHint"] | FragmentToken873 | FragmentToken874;
