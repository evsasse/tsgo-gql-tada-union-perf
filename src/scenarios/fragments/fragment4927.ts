import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4925 } from "./fragment4925";
import type { FragmentToken4926 } from "./fragment4926";

export const FRAGMENT_4927 = gql(`
  fragment Fragment4927 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult4927 = ResultOf<typeof FRAGMENT_4927>;
type FragmentSelf4927 = NonNullable<FragmentResult4927>;

export type FragmentToken4927 =
  | FragmentSelf4927["__typename"]
  | FragmentSelf4927["typenameHint"] | FragmentToken4925 | FragmentToken4926;
