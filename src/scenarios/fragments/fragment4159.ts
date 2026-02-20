import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4157 } from "./fragment4157";
import type { FragmentToken4158 } from "./fragment4158";

export const FRAGMENT_4159 = gql(`
  fragment Fragment4159 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult4159 = ResultOf<typeof FRAGMENT_4159>;
type FragmentSelf4159 = NonNullable<FragmentResult4159>;

export type FragmentToken4159 =
  | FragmentSelf4159["__typename"]
  | FragmentSelf4159["typenameHint"] | FragmentToken4157 | FragmentToken4158;
