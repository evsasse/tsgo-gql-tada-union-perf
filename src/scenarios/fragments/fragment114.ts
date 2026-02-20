import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken112 } from "./fragment112";
import type { FragmentToken113 } from "./fragment113";

export const FRAGMENT_114 = gql(`
  fragment Fragment114 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult114 = ResultOf<typeof FRAGMENT_114>;
type FragmentSelf114 = NonNullable<FragmentResult114>;

export type FragmentToken114 =
  | FragmentSelf114["__typename"]
  | FragmentSelf114["typenameHint"] | FragmentToken112 | FragmentToken113;
