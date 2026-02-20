import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken958 } from "./fragment958";
import type { FragmentToken959 } from "./fragment959";

export const FRAGMENT_960 = gql(`
  fragment Fragment960 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult960 = ResultOf<typeof FRAGMENT_960>;
type FragmentSelf960 = NonNullable<FragmentResult960>;

export type FragmentToken960 =
  | FragmentSelf960["__typename"]
  | FragmentSelf960["typenameHint"] | FragmentToken958 | FragmentToken959;
