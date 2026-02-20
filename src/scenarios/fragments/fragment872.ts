import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken870 } from "./fragment870";
import type { FragmentToken871 } from "./fragment871";

export const FRAGMENT_872 = gql(`
  fragment Fragment872 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult872 = ResultOf<typeof FRAGMENT_872>;
type FragmentSelf872 = NonNullable<FragmentResult872>;

export type FragmentToken872 =
  | FragmentSelf872["__typename"]
  | FragmentSelf872["typenameHint"] | FragmentToken870 | FragmentToken871;
