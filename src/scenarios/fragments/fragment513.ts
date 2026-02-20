import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken511 } from "./fragment511";
import type { FragmentToken512 } from "./fragment512";

export const FRAGMENT_513 = gql(`
  fragment Fragment513 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult513 = ResultOf<typeof FRAGMENT_513>;
type FragmentSelf513 = NonNullable<FragmentResult513>;

export type FragmentToken513 =
  | FragmentSelf513["__typename"]
  | FragmentSelf513["typenameHint"] | FragmentToken511 | FragmentToken512;
