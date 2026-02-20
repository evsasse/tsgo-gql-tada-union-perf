import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken452 } from "./fragment452";
import type { FragmentToken453 } from "./fragment453";

export const FRAGMENT_454 = gql(`
  fragment Fragment454 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult454 = ResultOf<typeof FRAGMENT_454>;
type FragmentSelf454 = NonNullable<FragmentResult454>;

export type FragmentToken454 =
  | FragmentSelf454["__typename"]
  | FragmentSelf454["typenameHint"] | FragmentToken452 | FragmentToken453;
