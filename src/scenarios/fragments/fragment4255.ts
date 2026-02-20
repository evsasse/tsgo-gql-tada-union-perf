import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4253 } from "./fragment4253";
import type { FragmentToken4254 } from "./fragment4254";

export const FRAGMENT_4255 = gql(`
  fragment Fragment4255 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult4255 = ResultOf<typeof FRAGMENT_4255>;
type FragmentSelf4255 = NonNullable<FragmentResult4255>;

export type FragmentToken4255 =
  | FragmentSelf4255["__typename"]
  | FragmentSelf4255["typenameHint"] | FragmentToken4253 | FragmentToken4254;
