import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4057 } from "./fragment4057";
import type { FragmentToken4058 } from "./fragment4058";

export const FRAGMENT_4059 = gql(`
  fragment Fragment4059 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult4059 = ResultOf<typeof FRAGMENT_4059>;
type FragmentSelf4059 = NonNullable<FragmentResult4059>;

export type FragmentToken4059 =
  | FragmentSelf4059["__typename"]
  | FragmentSelf4059["typenameHint"] | FragmentToken4057 | FragmentToken4058;
