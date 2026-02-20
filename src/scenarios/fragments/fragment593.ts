import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken591 } from "./fragment591";
import type { FragmentToken592 } from "./fragment592";

export const FRAGMENT_593 = gql(`
  fragment Fragment593 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult593 = ResultOf<typeof FRAGMENT_593>;
type FragmentSelf593 = NonNullable<FragmentResult593>;

export type FragmentToken593 =
  | FragmentSelf593["__typename"]
  | FragmentSelf593["typenameHint"] | FragmentToken591 | FragmentToken592;
