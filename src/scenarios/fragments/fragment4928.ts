import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4926 } from "./fragment4926";
import type { FragmentToken4927 } from "./fragment4927";

export const FRAGMENT_4928 = gql(`
  fragment Fragment4928 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult4928 = ResultOf<typeof FRAGMENT_4928>;
type FragmentSelf4928 = NonNullable<FragmentResult4928>;

export type FragmentToken4928 =
  | FragmentSelf4928["__typename"]
  | FragmentSelf4928["typenameHint"] | FragmentToken4926 | FragmentToken4927;
