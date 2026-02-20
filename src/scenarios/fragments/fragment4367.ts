import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4365 } from "./fragment4365";
import type { FragmentToken4366 } from "./fragment4366";

export const FRAGMENT_4367 = gql(`
  fragment Fragment4367 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult4367 = ResultOf<typeof FRAGMENT_4367>;
type FragmentSelf4367 = NonNullable<FragmentResult4367>;

export type FragmentToken4367 =
  | FragmentSelf4367["__typename"]
  | FragmentSelf4367["typenameHint"] | FragmentToken4365 | FragmentToken4366;
