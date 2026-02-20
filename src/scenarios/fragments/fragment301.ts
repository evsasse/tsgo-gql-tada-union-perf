import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken299 } from "./fragment299";
import type { FragmentToken300 } from "./fragment300";

export const FRAGMENT_301 = gql(`
  fragment Fragment301 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult301 = ResultOf<typeof FRAGMENT_301>;
type FragmentSelf301 = NonNullable<FragmentResult301>;

export type FragmentToken301 =
  | FragmentSelf301["__typename"]
  | FragmentSelf301["typenameHint"] | FragmentToken299 | FragmentToken300;
