import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken061 } from "./fragment061";
import type { FragmentToken062 } from "./fragment062";

export const FRAGMENT_063 = gql(`
  fragment Fragment063 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult063 = ResultOf<typeof FRAGMENT_063>;
type FragmentSelf063 = NonNullable<FragmentResult063>;

export type FragmentToken063 =
  | FragmentSelf063["__typename"]
  | FragmentSelf063["typenameHint"] | FragmentToken061 | FragmentToken062;
