import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken936 } from "./fragment936";
import type { FragmentToken937 } from "./fragment937";

export const FRAGMENT_938 = gql(`
  fragment Fragment938 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult938 = ResultOf<typeof FRAGMENT_938>;
type FragmentSelf938 = NonNullable<FragmentResult938>;

export type FragmentToken938 =
  | FragmentSelf938["__typename"]
  | FragmentSelf938["typenameHint"] | FragmentToken936 | FragmentToken937;
