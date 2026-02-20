import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4406 } from "./fragment4406";
import type { FragmentToken4407 } from "./fragment4407";

export const FRAGMENT_4408 = gql(`
  fragment Fragment4408 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult4408 = ResultOf<typeof FRAGMENT_4408>;
type FragmentSelf4408 = NonNullable<FragmentResult4408>;

export type FragmentToken4408 =
  | FragmentSelf4408["__typename"]
  | FragmentSelf4408["typenameHint"] | FragmentToken4406 | FragmentToken4407;
