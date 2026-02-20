import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken274 } from "./fragment274";
import type { FragmentToken275 } from "./fragment275";

export const FRAGMENT_276 = gql(`
  fragment Fragment276 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult276 = ResultOf<typeof FRAGMENT_276>;
type FragmentSelf276 = NonNullable<FragmentResult276>;

export type FragmentToken276 =
  | FragmentSelf276["__typename"]
  | FragmentSelf276["typenameHint"] | FragmentToken274 | FragmentToken275;
