import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken215 } from "./fragment215";
import type { FragmentToken216 } from "./fragment216";

export const FRAGMENT_217 = gql(`
  fragment Fragment217 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult217 = ResultOf<typeof FRAGMENT_217>;
type FragmentSelf217 = NonNullable<FragmentResult217>;

export type FragmentToken217 =
  | FragmentSelf217["__typename"]
  | FragmentSelf217["typenameHint"] | FragmentToken215 | FragmentToken216;
