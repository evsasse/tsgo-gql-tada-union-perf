import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4174 } from "./fragment4174";
import type { FragmentToken4175 } from "./fragment4175";

export const FRAGMENT_4176 = gql(`
  fragment Fragment4176 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult4176 = ResultOf<typeof FRAGMENT_4176>;
type FragmentSelf4176 = NonNullable<FragmentResult4176>;

export type FragmentToken4176 =
  | FragmentSelf4176["__typename"]
  | FragmentSelf4176["typenameHint"] | FragmentToken4174 | FragmentToken4175;
