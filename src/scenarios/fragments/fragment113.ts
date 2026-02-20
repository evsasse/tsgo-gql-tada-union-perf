import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken111 } from "./fragment111";
import type { FragmentToken112 } from "./fragment112";

export const FRAGMENT_113 = gql(`
  fragment Fragment113 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult113 = ResultOf<typeof FRAGMENT_113>;
type FragmentSelf113 = NonNullable<FragmentResult113>;

export type FragmentToken113 =
  | FragmentSelf113["__typename"]
  | FragmentSelf113["typenameHint"] | FragmentToken111 | FragmentToken112;
