import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken942 } from "./fragment942";
import type { FragmentToken943 } from "./fragment943";

export const FRAGMENT_944 = gql(`
  fragment Fragment944 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult944 = ResultOf<typeof FRAGMENT_944>;
type FragmentSelf944 = NonNullable<FragmentResult944>;

export type FragmentToken944 =
  | FragmentSelf944["__typename"]
  | FragmentSelf944["typenameHint"] | FragmentToken942 | FragmentToken943;
