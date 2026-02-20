import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4687 } from "./fragment4687";
import type { FragmentToken4688 } from "./fragment4688";

export const FRAGMENT_4689 = gql(`
  fragment Fragment4689 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult4689 = ResultOf<typeof FRAGMENT_4689>;
type FragmentSelf4689 = NonNullable<FragmentResult4689>;

export type FragmentToken4689 =
  | FragmentSelf4689["__typename"]
  | FragmentSelf4689["typenameHint"] | FragmentToken4687 | FragmentToken4688;
