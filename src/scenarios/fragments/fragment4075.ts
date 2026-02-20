import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4073 } from "./fragment4073";
import type { FragmentToken4074 } from "./fragment4074";

export const FRAGMENT_4075 = gql(`
  fragment Fragment4075 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult4075 = ResultOf<typeof FRAGMENT_4075>;
type FragmentSelf4075 = NonNullable<FragmentResult4075>;

export type FragmentToken4075 =
  | FragmentSelf4075["__typename"]
  | FragmentSelf4075["typenameHint"] | FragmentToken4073 | FragmentToken4074;
