import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4137 } from "./fragment4137";
import type { FragmentToken4138 } from "./fragment4138";

export const FRAGMENT_4139 = gql(`
  fragment Fragment4139 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult4139 = ResultOf<typeof FRAGMENT_4139>;
type FragmentSelf4139 = NonNullable<FragmentResult4139>;

export type FragmentToken4139 =
  | FragmentSelf4139["__typename"]
  | FragmentSelf4139["typenameHint"] | FragmentToken4137 | FragmentToken4138;
