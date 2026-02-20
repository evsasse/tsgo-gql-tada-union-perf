import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4363 } from "./fragment4363";
import type { FragmentToken4364 } from "./fragment4364";

export const FRAGMENT_4365 = gql(`
  fragment Fragment4365 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult4365 = ResultOf<typeof FRAGMENT_4365>;
type FragmentSelf4365 = NonNullable<FragmentResult4365>;

export type FragmentToken4365 =
  | FragmentSelf4365["__typename"]
  | FragmentSelf4365["typenameHint"] | FragmentToken4363 | FragmentToken4364;
