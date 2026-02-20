import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken971 } from "./fragment971";
import type { FragmentToken972 } from "./fragment972";

export const FRAGMENT_973 = gql(`
  fragment Fragment973 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult973 = ResultOf<typeof FRAGMENT_973>;
type FragmentSelf973 = NonNullable<FragmentResult973>;

export type FragmentToken973 =
  | FragmentSelf973["__typename"]
  | FragmentSelf973["typenameHint"] | FragmentToken971 | FragmentToken972;
