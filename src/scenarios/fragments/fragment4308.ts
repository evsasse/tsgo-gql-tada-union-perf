import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4306 } from "./fragment4306";
import type { FragmentToken4307 } from "./fragment4307";

export const FRAGMENT_4308 = gql(`
  fragment Fragment4308 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult4308 = ResultOf<typeof FRAGMENT_4308>;
type FragmentSelf4308 = NonNullable<FragmentResult4308>;

export type FragmentToken4308 =
  | FragmentSelf4308["__typename"]
  | FragmentSelf4308["typenameHint"] | FragmentToken4306 | FragmentToken4307;
