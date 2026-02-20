import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken225 } from "./fragment225";
import type { FragmentToken226 } from "./fragment226";

export const FRAGMENT_227 = gql(`
  fragment Fragment227 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult227 = ResultOf<typeof FRAGMENT_227>;
type FragmentSelf227 = NonNullable<FragmentResult227>;

export type FragmentToken227 =
  | FragmentSelf227["__typename"]
  | FragmentSelf227["typenameHint"] | FragmentToken225 | FragmentToken226;
