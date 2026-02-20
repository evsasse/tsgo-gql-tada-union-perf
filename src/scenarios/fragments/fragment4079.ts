import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4077 } from "./fragment4077";
import type { FragmentToken4078 } from "./fragment4078";

export const FRAGMENT_4079 = gql(`
  fragment Fragment4079 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult4079 = ResultOf<typeof FRAGMENT_4079>;
type FragmentSelf4079 = NonNullable<FragmentResult4079>;

export type FragmentToken4079 =
  | FragmentSelf4079["__typename"]
  | FragmentSelf4079["typenameHint"] | FragmentToken4077 | FragmentToken4078;
