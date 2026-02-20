import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4187 } from "./fragment4187";
import type { FragmentToken4188 } from "./fragment4188";

export const FRAGMENT_4189 = gql(`
  fragment Fragment4189 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult4189 = ResultOf<typeof FRAGMENT_4189>;
type FragmentSelf4189 = NonNullable<FragmentResult4189>;

export type FragmentToken4189 =
  | FragmentSelf4189["__typename"]
  | FragmentSelf4189["typenameHint"] | FragmentToken4187 | FragmentToken4188;
