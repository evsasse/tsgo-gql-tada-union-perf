import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3999 } from "./fragment3999";
import type { FragmentToken4000 } from "./fragment4000";

export const FRAGMENT_4001 = gql(`
  fragment Fragment4001 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult4001 = ResultOf<typeof FRAGMENT_4001>;
type FragmentSelf4001 = NonNullable<FragmentResult4001>;

export type FragmentToken4001 =
  | FragmentSelf4001["__typename"]
  | FragmentSelf4001["typenameHint"] | FragmentToken3999 | FragmentToken4000;
