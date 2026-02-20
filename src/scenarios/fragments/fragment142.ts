import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken140 } from "./fragment140";
import type { FragmentToken141 } from "./fragment141";

export const FRAGMENT_142 = gql(`
  fragment Fragment142 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult142 = ResultOf<typeof FRAGMENT_142>;
type FragmentSelf142 = NonNullable<FragmentResult142>;

export type FragmentToken142 =
  | FragmentSelf142["__typename"]
  | FragmentSelf142["typenameHint"] | FragmentToken140 | FragmentToken141;
