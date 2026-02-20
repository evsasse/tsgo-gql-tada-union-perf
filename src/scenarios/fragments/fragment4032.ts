import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4030 } from "./fragment4030";
import type { FragmentToken4031 } from "./fragment4031";

export const FRAGMENT_4032 = gql(`
  fragment Fragment4032 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult4032 = ResultOf<typeof FRAGMENT_4032>;
type FragmentSelf4032 = NonNullable<FragmentResult4032>;

export type FragmentToken4032 =
  | FragmentSelf4032["__typename"]
  | FragmentSelf4032["typenameHint"] | FragmentToken4030 | FragmentToken4031;
