import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken934 } from "./fragment934";
import type { FragmentToken935 } from "./fragment935";

export const FRAGMENT_936 = gql(`
  fragment Fragment936 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult936 = ResultOf<typeof FRAGMENT_936>;
type FragmentSelf936 = NonNullable<FragmentResult936>;

export type FragmentToken936 =
  | FragmentSelf936["__typename"]
  | FragmentSelf936["typenameHint"] | FragmentToken934 | FragmentToken935;
