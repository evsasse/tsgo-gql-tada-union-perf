import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4466 } from "./fragment4466";
import type { FragmentToken4467 } from "./fragment4467";

export const FRAGMENT_4468 = gql(`
  fragment Fragment4468 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult4468 = ResultOf<typeof FRAGMENT_4468>;
type FragmentSelf4468 = NonNullable<FragmentResult4468>;

export type FragmentToken4468 =
  | FragmentSelf4468["__typename"]
  | FragmentSelf4468["typenameHint"] | FragmentToken4466 | FragmentToken4467;
