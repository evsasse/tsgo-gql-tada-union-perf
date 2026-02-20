import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken491 } from "./fragment491";
import type { FragmentToken492 } from "./fragment492";

export const FRAGMENT_493 = gql(`
  fragment Fragment493 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult493 = ResultOf<typeof FRAGMENT_493>;
type FragmentSelf493 = NonNullable<FragmentResult493>;

export type FragmentToken493 =
  | FragmentSelf493["__typename"]
  | FragmentSelf493["typenameHint"] | FragmentToken491 | FragmentToken492;
